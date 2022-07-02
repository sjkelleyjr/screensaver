var axios = require('axios');
require('dotenv').config();

const getForm = async (formId) => {
    try {
        const {data} = await axios.get(`https://api.typeform.com/forms/${formId}`,{
            headers: {
                'Authorization': `Bearer ${process.env.TYPEFORM_ACCESS_TOKEN}`
            }
        });
        return data;
    } catch (err) {
        console.log(err);
    }
}

const searchForms = async (searchQuery) => {
    try {
        const {data} = await axios.get(`https://api.typeform.com/forms`, {
            params: { search: searchQuery },
            headers: {
                'Authorization': `Bearer ${process.env.TYPEFORM_ACCESS_TOKEN}`
            }
        });

        return data;
    } catch (err) {
        console.log(err);
    }
}


const createForm = async (userEmail) => {
    try {
        const {data} = await axios.post(`https://api.typeform.com/forms`, {
            'title': 'SOME_TEST_TYPEFORM_TITLE', // TODO: need to define some base typeform to create here.
            'hidden': [ userEmail ]
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.TYPEFORM_ACCESS_TOKEN}`
            }
        });
        return data;
    } catch(err) {
        console.log(err);
    }
}

const deleteForm = async (formId) => {
    try {
        const {data} = await axios.delete(`https://api.typeform.com/forms/${formId}`, {
            headers: {
                'Authorization': `Bearer ${process.env.TYPEFORM_ACCESS_TOKEN}`
            }
        });
        return data;
    } catch(err) {
        console.log(err);
    }
}


(async () => {
    // create a typeform with some_rando_email in the hidden field
    // const createFormResponse = await createForm('some_rando_email');
    // get it.
    // console.log(await getForm(createFormResponse.id))
    
    // try a search
    // DOESN'T WORK
    // console.log(await searchForms('some_rando_email'));
    // DOES WORK
    console.log(await searchForms('SOME_TEST_TYPEFORM_TITLE'));

    // delete any temp forms created during testing.
    // await deleteForm('C86j6Lf4')
})();