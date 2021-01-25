cube(`DItems`, {
  sql: `SELECT * FROM mimiciii.d_items`,
  
  joins: {
    Chartevents: {
      relationship: `hasMany`,
      sql: `${Chartevents}.ITEMID = ${DItems}.ITEMID`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [unitname]
    }
  },
  
  dimensions: {
    ROW_ID: {
      sql: `ROW_ID`,
      type: `number`,
      primaryKey: true
    },
    unitname: {
      sql: `unitname`,
      type: `string`
    },
    
    linksto: {
      sql: `linksto`,
      type: `string`
    },
    
    category: {
      sql: `category`,
      type: `string`
    },
    
    abbreviation: {
      sql: `abbreviation`,
      type: `string`
    },
    
    label: {
      sql: `label`,
      type: `string`
    },
    
    paramType: {
      sql: `param_type`,
      type: `string`
    },
    
    dbsource: {
      sql: `dbsource`,
      type: `string`
    }
  }
});
