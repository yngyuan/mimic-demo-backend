cube(`Labevents`, {
  sql: `SELECT * FROM mimiciii.labevents`,
  
  joins: {
    Admissions: {
      relationship: `belongsTo`, // not sure about this
      sql: `${Labevents}.HADM_ID = ${Admissions}.HADM_ID`
    },
    Patients: {
      relationship: `belongsTo`,
      sql: `${Labevents}.SUBJECT_ID = ${Patients}.SUBJECT_ID`
    },
    DLabitems: {
      relationship: `belongsTo`,
      sql: `${Labevents}.ITEMID = ${DLabitems}.ITEMID`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    },
    valuenum:{
      sql:`valuenum`,
      type: `avg`
    },

  },
  
  dimensions: {
    ROW_ID: {
      sql: `ROW_ID`,
      type: `number`,
      primaryKey: true
    },

    flag: {
      sql: `flag`,
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
    //
    // valuenum:{
    //   sql:`valuenum`,
    //   type: `number`
    // },
    
    charttime: {
      sql: `charttime`,
      type: `time`
    }
  }
});
