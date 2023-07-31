import { promises as fs } from 'fs';

 const setPathData = async (path)=> {
  try {
    const content = [];
    const { ruta } = splitPathAndFileName(path)
    try {
        await fs.access(path);
        return path;
    } catch (err) {
    }

    await fs.mkdir(ruta, { recursive: true });
    await fs.writeFile(path, JSON.stringify(content));
    return path;
} catch (error) {
    console.error('Error al crear el directorio o archivo:', error);
    throw error;
}
  
}

const splitPathAndFileName = (filePath) =>{
  const lastSlashIndex = filePath.lastIndexOf('/');
  const ruta = filePath.slice(0, lastSlashIndex + 1);
  const fileName = filePath.slice(lastSlashIndex + 1);

  return { 
    ruta, 
    fileName 
};
}



export default setPathData;



 