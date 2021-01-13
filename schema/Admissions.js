cube(`Admissions`, {
  sql: `SELECT * FROM mimiciii.admissions`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [ethnicity]
    }
  },
  
  dimensions: {
    admissionLocation: {
      sql: `admission_location`,
      type: `string`
    },
    
    admissionType: {
      sql: `admission_type`,
      type: `string`
    },
    
    diagnosis: {
      sql: `diagnosis`,
      type: `string`
    },
    
    insurance: {
      sql: `insurance`,
      type: `string`
    },
    
    ethnicity: {
      sql: `ethnicity`,
      type: `string`
    },
    
    dischargeLocation: {
      sql: `discharge_location`,
      type: `string`
    },
    
    language: {
      sql: `language`,
      type: `string`
    },
    
    religion: {
      sql: `religion`,
      type: `string`
    },
    
    maritalStatus: {
      sql: `marital_status`,
      type: `string`
    },
    
    deathtime: {
      sql: `deathtime`,
      type: `time`
    },
    
    edregtime: {
      sql: `edregtime`,
      type: `time`
    },
    
    admittime: {
      sql: `admittime`,
      type: `time`
    },
    
    edouttime: {
      sql: `edouttime`,
      type: `time`
    },
    
    dischtime: {
      sql: `dischtime`,
      type: `time`
    }
  }
});
