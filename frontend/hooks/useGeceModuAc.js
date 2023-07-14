import uselocalStorageKullan from "./useLocalStorageKullan";

function useGeceModuAc() {
    const [geceModu, setGeceModu] = uselocalStorageKullan("geceModu", false);
    return [geceModu, setGeceModu];
}
export default useGeceModuAc;