cube(`Prescriptions`, {
  sql: `SELECT * FROM mimiciii.prescriptions`,
  
  joins: {
    Admissions: {
      relationship: `belongsTo`, // not sure about this
      sql: `${Prescriptions}.HADM_ID = ${Admissions}.HADM_ID`
    },
    Patients: {
      relationship: `belongsTo`,
      sql: `${Prescriptions}.SUBJECT_ID = ${Patients}.SUBJECT_ID`
    },
    Icustays: {
      relationship: `belongsTo`,
      sql: `${Prescriptions}.ICUSTAY_ID = ${Icustays}.ICUSTAY_ID`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [drugNameGeneric, drugNamePoe, enddate, startdate]
    }
  },
  
  dimensions: {
    ROW_ID: {
      sql: `ROW_ID`,
      type: `number`,
      primaryKey: true
    },

    doseValRx: {
      sql: `dose_val_rx`,
      type: `string`
    },
    
    formValDisp: {
      sql: `form_val_disp`,
      type: `string`
    },
    
    drugNameGeneric: {
      sql: `drug_name_generic`,
      type: `string`
    },
    
    drugType: {
      sql: `drug_type`,
      type: `string`
    },
    
    drug: {
      sql: `drug`,
      type: `string`
    },
    
    ndc: {
      sql: `ndc`,
      type: `string`
    },
    
    route: {
      sql: `route`,
      type: `string`
    },
    
    formularyDrugCd: {
      sql: `formulary_drug_cd`,
      type: `string`
    },
    
    formUnitDisp: {
      sql: `form_unit_disp`,
      type: `string`
    },
    
    gsn: {
      sql: `gsn`,
      type: `string`
    },
    
    doseUnitRx: {
      sql: `dose_unit_rx`,
      type: `string`
    },
    
    prodStrength: {
      sql: `prod_strength`,
      type: `string`
    },
    
    drugNamePoe: {
      sql: `drug_name_poe`,
      type: `string`
    },
    
    enddate: {
      sql: `enddate`,
      type: `time`
    },
    
    startdate: {
      sql: `startdate`,
      type: `time`
    }
  }
});
