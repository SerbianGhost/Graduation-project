const sortObject = (obj: Record<string, any>) => {
    const dataArray = Object.entries(obj);
    dataArray.sort((a, b) => a[0].localeCompare(b[0]));

    const sortedObject: Record<string, any> = {};
    dataArray.forEach(([key, value]) => {
        sortedObject[key] = value;
    });

    return sortedObject;
};

export default sortObject;
