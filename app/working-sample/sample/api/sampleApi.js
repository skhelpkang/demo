import axios from "axios"

const baseUrl = "/working-sample/v1"

//
async function findSample(sampleId) {
  try{
    const response = await axios.get(`${baseUrl}/sample/${sampleId}`)
    return response.data
  }catch(e){
    if(e.response){

    }
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
  findSample,
  findSampleList,
}
