import { promises as fs } from 'fs';

 const setPathData = async (path)=> {
  try {
    const content = [];
    const { ruta } = splitPathAndFileName(path)
    try {
        await fs.access(path);
        console.log('Directorio y archivo ya existentes. No se reescribe el archivo.');
        return path;
    } catch (err) {
        // El archivo no existe, lo creamos más adelante
    }

    await fs.mkdir(ruta, { recursive: true });
    await fs.writeFile(path, JSON.stringify(content));
    console.log('Directorio y archivo creados.');

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

  return { ruta, fileName };
}



export default setPathData;



 