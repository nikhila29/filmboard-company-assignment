import React from 'react';

const data = {
    "name": "Equipments",
    "slug": "equipments",
    "schema": {
        "field_groups": [{
            "name": "Equipment Information",
            "slug": "equipment_information",
            "fields": [
                {
                    "name": "Equipment No",
                    "slug": "equipment_no",
                    "type": "TEXT",
                    "min_length": 1,
                    "max_length": 255,
                    "is_unique": true,
                    "is_required": true
                },
                {
                    "name": "First Name",
                    "slug": "first_name",
                    "type": "TEXT",
                    "min_length": 1,
                    "max_length": 255,
                    "is_required": true
                },
                {
                    "name": "Last Name",
                    "slug": "last_name",
                    "type": "TEXT",
                    "min_length": 1,
                    "max_length": 255,
                    "is_required": true
                },
                {
                    "name": "Mobile Phone",
                    "slug": "mobile_phone",
                    "type": "TEXT",
                    "pattern": "",
                    "is_required": true
                },
                {
                    "name": "Email",
                    "slug": "email",
                    "type": "EMAIL",
                    "is_required": true
                },
                
                {
                    "name": "Category",
                    "slug": "category",
                    "type": "DROPDOWN",
                    "is_required": true,
                    "is_external": false,
                    "is_multi": false,
                    "data_source_local": {
                        "options": [
                            {
                                "label": "Residential",
                                "value": "Residential"
                            },
                            {
                                "label": "Commercial",
                                "value": "Commercial"
                            }
                        ]
                    }
                },
                {
                    "name": "Sales tax code",
                    "slug": "sales_tax_code",
                    "type": "TEXT",
                    "min_length": 1,
                    "max_length": 255,
                    "is_required": false
                },
                {
                    "name": "Invoice method",
                    "slug": "invoice_method",
                    "type": "DROPDOWN",
                    "is_required": true,
                    "is_external": false,
                    "is_multi": false,
                    "data_source_local": {
                        "options": [
                            {
                                "label": "Email",
                                "value": "email"
                            },
                            {
                                "label": "Paper",
                                "value": "paper"
                            }
                        ]
                    }
                },
                {
                    "name": "Invoice Type",
                    "slug": "invoice_type",
                    "type": "TEXT",
                    "min_length": 1,
                    "max_length": 255,
                    "is_required": false
                }
            ]
        }]
    }
}

function Jsonform() {
    const onSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className='container'>
        <form className='form-outer' onSubmit={onSubmit}>
            {
                data.schema.field_groups.map(formData => {
                    console.log("formData----",formData);
                    return(
                        <div>
                            <h1>{formData.name}</h1>
                            {
                                formData.fields.map(inputData => {
                                    console.log("inputData-----",inputData);
                                    return(
                                        <div>
                                            <label>{inputData.name}:</label>
                                           <input type={inputData.type} name={inputData.name} required={inputData.is_required} multiple={inputData.is_multi} />
                                        </div>
                                    )
                                })
                            }
                            <button type='onSubmit'>Submit</button>
                        </div>
                    )
                })
            }
        </form>
    </div>
  
  )
}

export default Jsonform;
