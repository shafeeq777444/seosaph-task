
import pkg from "pg"
const {Pool}=pkg

const connectPostgresDB=()=>{
    const pool=new Pool({
        connectionString:process.env.DATABASE_URL,
    })
    
    pool.connect()
    .then(() => console.log('✅ PostgreSQL connected successfully'))
    .catch(err => console.error('❌ PostgreSQL connection error:', err));

}


export default connectPostgresDB