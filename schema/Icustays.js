cube(`Icustays`, {
  sql: `SELECT * FROM mimiciii.icustays`,
  
  joins: {
    Admissions: {
      relationship: `hasOne`, // not sure about this
      sql: `${Icustays}.HADM_ID = ${Admissions}.HADM_ID`
    },
    Patients: {
      relationship: `belongsTo`,
      sql: `${Icustays}.SUBJECT_ID = ${Patients}.SUBJECT_ID`
    }
  },
  
  measures: {

    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    ICUSTAY_ID: {
      sql: `ICUSTAY_ID`,
      type: `number`,
      primaryKey: true
    },

    firstCareunit: {
      sql: `first_careunit`,
      type: `string`
    },
    
    lastCareunit: {
      sql: `last_careunit`,
      type: `string`
    },
    
    dbsource: {
      sql: `dbsource`,
      type: `string`
    },
    
    intime: {
      sql: `intime`,
      type: `time`
    },
    
    outtime: {
      sql: `outtime`,
      type: `time`
    }
  }
});
