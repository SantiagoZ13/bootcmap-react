import dotenv from 'dotenv'
dotenv.config()
import { MongoClient, ServerApiVersion } from 'mongodb';

const {MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME} = process.env
const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/?retryWrites=true&w=majority&appName=Cluster`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const getDB = async () =>{
  try{
    await client.connect()
    return client.db("sample_training")
  } catch (error){
    console.error("Coudn't connect to the db", { cause: error })
  }
}

const getAll = async (collectionName, query = {}) =>{
  try{
    const database = await getDB()
    return await database.collection(collectionName).find(query).limit(10).toArray()
  }catch(error){
    console.error(`Coudn't get all ${collectionName} with query ${query}`, {
      cause: error,
    })
  }finally{
    await client.close();
  }
}
export default getAll