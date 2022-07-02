var axios = require('axios');
require('dotenv').config();

const TYPEFORM_URL = 'https://api.typeform.com/'
const HEADER_OBJECT = {'Authorization': `Bearer ${process.env.TYPEFORM_ACCESS_TOKEN}`}

const post = async (url, body) => {
    const {data} = await axios.post(url, body, { headers: HEADER_OBJECT });
    return data;
}

const patch = async (url, body) => {
    const {data} = await axios.patch(url, body, { headers: HEADER_OBJECT });
    return data;
}

const get = async (url) => {
    const {data} = await axios.get(url, { headers: HEADER_OBJECT });
    return data;
}

const del = async (url) => {
    try {
        const {data} = await axios.delete(url, { headers: HEADER_OBJECT });
        return data;
    } catch(err) {
        console.log(err);
    }
}

const getForm = async (formId) => {
    try {
        return await get(TYPEFORM_URL + `forms/${formId}`)
    } catch(err) {
        console.log(err);
    }
}

const getWorkspace = async (name) => {
    try {
        return await get(TYPEFORM_URL + `workspaces/${name}`, name)
    } catch(err) {
        console.log(err);
    }
}

const searchForms = async (searchQuery) => {
    try {
        const {data} = await axios.get(TYPEFORM_URL + 'forms', {
            params: { search: searchQuery },
            headers: HEADER_OBJECT
        });

        return data;
    } catch (err) {
        console.log(err);
    }
}

const getWorkspaces = async () => {
    try {
        const {data} = await axios.get(TYPEFORM_URL + 'workspaces', {
            params: { page_size: 200 },
            headers: HEADER_OBJECT
        });

        return data;
    } catch (err) {
        console.log(err);
    }
}


const createForm = async (userEmail) => {
    try {
        return await post(TYPEFORM_URL + 'forms', {'title': 'SOME_TEST_TYPEFORM_TITLE', 'hidden': [userEmail]})
    } catch(err) {
        console.log(err);
    }
}

const createWorkspace = async (workspaceName) => {
    try {
        return await post(TYPEFORM_URL + 'workspaces', { 'name': workspaceName })
    } catch(err) {
        console.log(err);
    }
}

const updateWorkspace = async (workspaceId, body) => {
    try {
        return await patch(TYPEFORM_URL + `workspaces/${workspaceId}`, body)
    } catch(err) {
        console.log(err);
    }
}

const deleteForm = async (formId) => {
    try {
        return del(TYPEFORM_URL + `forms/${formId}`)
    } catch(err) {
        console.log(err);
    }
}

const deleteWorkspace = async (workspaceId) => {
    try {
        return del(TYPEFORM_URL + `workspaces/${workspaceId}`)
    } catch(err) {
        console.log(err);
    }
}


const formTest = async () => {
    // create a typeform with some_rando_email in the hidden field
    // const createFormResponse = await createForm('some_rando_email');
    // get it.
    // console.log(await getForm(createFormResponse.id))
    
    // try a search
    // DOESN'T WORK (search on hidden field)
    // console.log(await searchForms('some_rando_email'));
    // DOES WORK (search on title)
    // console.log(await searchForms('SOME_TEST_TYPEFORM_TITLE'));

    // delete any temp forms created during testing.
    // await deleteForm('DNwPLav4')
}

const workspacesTest = async () => {
    // const createWorkspaceResponse = await createWorkspace('some_random_workspace');
    // this throws a 500 for some reason.
    // const updateWorkspaceResponse = await updateWorkspace(createWorkspaceResponse.id, [{ 
    //     'op': 'add', 
    //     'path':'/members',     
    //     'value': {
    //         'email': 'sjkelleyjr@gmail.com'
    //     }
    // }])

    // console.log(await getWorkspace(createWorkspaceResponse.id))
    // await deleteWorkspace(createWorkspaceResponse.id)
}
workspacesTest();
