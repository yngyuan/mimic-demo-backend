cube(`DLabitems`, {
  sql: `SELECT * FROM mimiciii.d_labitems`,
  
  joins: {
    Labevents: {
      relationship: `hasMany`,
      sql: `${Labevents}.ITEMID = ${DLabitems}.ITEMID`
    }
  },
  
  measures: {

    count: {
      type: `count`,
      drillMembers: [fluid]
    }
  },
  
  dimensions: {
    ROW_ID: {
      sql: `ROW_ID`,
      type: `number`,
      primaryKey: true
    },

    loincCode: {
      sql: `loinc_code`,
      type: `string`
    },
    
    category: {
      sql: `category`,
      type: `string`
    },
    
    label: {
      sql: `label`,
      type: `string`
    },
    
    fluid: {
      sql: `fluid`,
      type: `string`
    },

    normalRangeF: {
      sql: `normal_range_F`,
      type: `string`
    }
  }
});
