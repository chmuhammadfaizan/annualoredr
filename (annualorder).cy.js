describe('annualoreder',()=>{
    beforeEach(()=>{
        cy.visit('https://ep-staging.almanahospital.org/')
    })   
    it('annualorder',()=>{
        cy.visit('https://ep-staging.almanahospital.org/')
        cy.get('.ant-select-selector')
        .click();
        cy.contains('EBRAHIM M. ALMANA & BROS CO - HOSPITAL DIVISION')
        .click();
        cy.get('#userName').type('15846')
        cy.get('#password').type('AGH-PIKESSOFT-@1290')
        cy.get('.ant-btn > span').click()
        cy.wait(12000);
        cy.get('.ant-dropdown-trigger').should('be.visible').then(($el) => {
        cy.wrap($el).click();
        cy.get('.ant-dropdown-trigger').click(); 
        cy.wait(2000);
        cy.get('li.ant-dropdown-menu-item').eq(4).click();
        cy.wait(2000)
        cy.get('.ant-menu-overflow-item-rest > .ant-menu-submenu-title').click();
        cy.get(':nth-child(3) > .ant-menu-submenu-title').should('be.visible').click();
        cy.wait(2000)
        cy.get('[title="Annual Order"] > .ant-menu-title-content > a').should('be.visible').click();
        cy.wait(2000)
        cy.get('.ant-col-19 > .ant-btn > span').click()
        cy.get('#requestForm_isDirectPo').click();
        cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click();
        cy.get('#requestForm_referenceNo').type('200')
        cy.get('.ant-checkbox-input').check().should('be.checked')
        cy.get('#requestForm_paymentTermDescription').type('visa')
        cy.get('#requestForm_vendorId').type('00000007');
        cy.get('.ant-input-group-addon > .ant-btn > .anticon > svg').should('be.visible').click();
        cy.get('.ant-select-item-option-content > div').click();
        cy.get('#requestForm_justification').type('clear justification is required')
        cy.get('#requestForm_quotationValidity')
        .should('be.visible')
        .should('be.enabled')
        .invoke('removeAttr', 'readonly') 
        .clear()
        .type('2/27/2023', {force: true}); 
        cy.get('[style="float: right; margin-bottom: 20px;"]').click();
        cy.get(':nth-child(2) > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input-affix-wrapper > .ant-input').type('000010550052')
        cy.get(':nth-child(2) > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input-group-addon > .ant-btn').eq(0).click();
        cy.get('.anticon.anticon-plus-circle').eq(0).click();
        cy.get('#itemForm_catalogNo').type('200')
        cy.get('#itemForm_manufacturer').type('dell')
        cy.get('#itemForm_warrantyYears').type('2')
        cy.get('#itemForm_duration').type('3')
        cy.get('#itemForm_durationType').click({force: true});
        cy.contains('MONTH').click({force: true});
        cy.get('#itemForm_sfdaNo').type('SDFA123')
        cy.get('#itemForm_midmNo').type('MIDM321')
        cy.get('#itemForm_unit').click({force: true});
        cy.contains('EACH').click({force: true});
        cy.get('#itemForm_quantity').should('be.visible').type('100')
        cy.get('#itemForm_unitPrice').type('1000')
        cy.get('#itemForm_discount').type('10%')
        cy.get('#itemForm_description').type('this ia a first item discription');
        cy.get(':nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click();
        //2
        cy.get('[style="float: right; margin-bottom: 20px;"]').click();
        cy.get(':nth-child(2) > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input-affix-wrapper > .ant-input').type('000010552116')
        cy.get(':nth-child(2) > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input-group-addon > .ant-btn').eq(0).click();
        cy.get('.anticon.anticon-plus-circle').eq(0).click();
        cy.get('#itemForm_catalogNo').type('200')
        cy.get('#itemForm_manufacturer').type('hp')
        cy.get('#itemForm_warrantyYears').type('2')
        cy.get('#itemForm_duration').type('3')
        cy.get('#itemForm_durationType').click({force: true});
        cy.contains('ASSETS').click({force: true});
        cy.get(':nth-child(10) > .ant-form-item > .ant-row > .ant-col-22 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click({force:true});
        cy.contains('Yes').click({force:true});
        cy.get('#itemForm_sfdaNo').type('SDFA123')
        cy.get('#itemForm_midmNo').type('MIDM321')
        cy.get('#itemForm_unit').click({force: true});
        cy.contains('EACH').click({force: true});
        cy.get('#itemForm_quantity').should('be.visible').type('200')
        cy.get('#itemForm_unitPrice').type('2000')
        cy.get('#itemForm_discount').type('20%')
        cy.get('#itemForm_description').type('this ia a second item discription');
        cy.get(':nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click();
        //cy.get('#requestForm_quotationValidity')
        ///.click().type('2/27/2023');
        

        //cy.get('#requestForm_quotationValidity').click('{force: true}').type('2/27/2023')
        //cy.get('#requestForm_quotationValidity').type('2/27/2023')
        
        
    })
})
})