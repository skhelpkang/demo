import axios from "axios"

const baseUrl = "/working-sample/v1"
const content = {
  title: 'Sample Page',
  text: 'This is a react sample page.',
}

//
function findSampleContent(pageName) {
  return {
    title: `${pageName} ${content.title}`,
    text: `${content.text} - ${pageName}`,
  }
}

async function findSampleList(pageName) {
  try{
    const response = await axios.get(`${baseUrl}/sample`)
    return response.data
  }catch(e){
    if(e.response){

    }
  }
}

export default {
  findSampleContent,
  findSampleList,
}
