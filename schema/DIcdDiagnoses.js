cube(`DIcdDiagnoses`, {
  sql: `SELECT * FROM mimiciii.d_icd_diagnoses`,
  
  joins: {
    DiagnosesIcd: {
      relationship: `hasOne`,
      sql: `${DiagnosesIcd}.ICD9_CODE = ${DIcDiagnoses}.ICD9_CODE`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [longTitle, shortTitle]
    }
  },
  
  dimensions: {
    ROW_ID: {
      sql: `ROW_ID`,
      type: `number`,
      primaryKey: true
    },
    longTitle: {
      sql: `long_title`,
      type: `string`
    },
    
    shortTitle: {
      sql: `short_title`,
      type: `string`
    },
    
    icd9Code: {
      sql: `icd9_code`,
      type: `string`
    }
  }
});
