cube(`DiagnosesIcd`, {
  sql: `SELECT * FROM mimiciii.diagnoses_icd`,
  
  joins: {
    Admissions: {
      relationship: `belongsTo`, // not sure about this
      sql: `${DiagnosesIcd}.HADM_ID = ${Admissions}.HADM_ID`
    },
    Patients: {
      relationship: `belongsTo`,
      sql: `${DiagnosesIcd}.SUBJECT_ID = ${Patients}.SUBJECT_ID`
    },
    DIcdDiagnoses: {
      relationship: `hasOne`,
      sql: `${DiagnosesIcd}.ICD9_CODE = ${DIcDiagnoses}.ICD9_CODE`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    ROW_ID: {
      sql: `ROW_ID`,
      type: `number`,
      primaryKey: true
    },

    icd9Code: {
      sql: `icd9_code`,
      type: `string`,
    }
  }
});
