cube(`Chartevents`, {
  sql: `SELECT * FROM mimiciii.chartevents`,
  
  joins: {
    Admissions: {
      relationship: `belongsTo`, // not sure about this
      sql: `${Chartevents}.HADM_ID = ${Admissions}.HADM_ID`
    },
    Patients: {
      relationship: `belongsTo`,
      sql: `${Chartevents}.SUBJECT_ID = ${Patients}.SUBJECT_ID`
    },
    DItems: {
      relationship: `hasOne`,
      sql: `${Chartevents}.ITEMID = ${DItems}.ITEMID`
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
    stopped: {
      sql: `stopped`,
      type: `string`
    },
    
    valueuom: {
      sql: `valueuom`,
      type: `string`
    },
    
    value: {
      sql: `value`,
      type: `string`
    },
    
    resultstatus: {
      sql: `resultstatus`,
      type: `string`
    },
    
    storetime: {
      sql: `storetime`,
      type: `time`
    },
    
    charttime: {
      sql: `charttime`,
      type: `time`
    }
  }
});
