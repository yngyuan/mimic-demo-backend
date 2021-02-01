cube(`Patients`, {
  sql: `SELECT * FROM mimiciii.patients`,
  
  joins: {
    Admissions: {
      relationship:`hasMany`,
      sql:`${Patients}.SUBJECT_ID = ${Admissions}.SUBJECT_ID`
    },
    Icustays: {
      relationship: `hasMany`,
      sql: `${Patients}.SUBJECT_ID = ${Icustays}.SUBJECT_ID`
    }
  },

  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    },
  },
  
  dimensions: {
    SUBJECT_ID: {
      sql: `SUBJECT_ID`,
      type: `string`
    },

    ROW_ID: {
      sql: `ROW_ID`,
      type: `number`,
      primaryKey: true
    },

    gender: {
      sql: `gender`,
      type: `string`
    },
    
    dodHosp: {
      sql: `dod_hosp`,
      type: `time`
    },
    
    dodSsn: {
      sql: `dod_ssn`,
      type: `time`
    },
    
    dob: {
      sql: `dob`,
      type: `time`
    },
    
    dod: {
      sql: `dod`,
      type: `time`
    }
  }
});
