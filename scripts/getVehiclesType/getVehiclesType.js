// возвращает класс авто
function getClassAuto(target) {
    const classAuto = target.dataset.vehicleClass
    return classAuto
}

// возвращает тип авто
function getTypeAuto(target) {
    const typeAuto =  target.dataset.vehicleType
    if (typeAuto === undefined) {
        return false
    } else {
        return typeAuto
    }
}

// вернет все автомобили переданного класса, а если передан тип, вернет указанного типа
function getAllAutoInClass(classAuto, typeAuto) {
    const vehiclesData = vehicles_data
    let findVehicles = []
    if (typeAuto) {
        findVehicles = vehiclesData.filter(item => item.Type === typeAuto) 
    } else {
        findVehicles = vehiclesData.filter(item => item.Class === classAuto)
    }

    return findVehicles
}

// возвращает массив транспорта переданного типа
export default function getVehiclesSomeType(target) {
    const classAuto = getClassAuto(target)
    const typeAuto =  getTypeAuto(target)
    const findVehicles = getAllAutoInClass(classAuto, typeAuto)
    if (findVehicles.length === 0) {
        return false
    } else {
        return findVehicles
    }
}