
interface SearchableType { [key: string] : any }

export const filterArrByArguments = <T extends SearchableType>(arr: T[], keys: string[], filterText: string): T[] => {
    return arr.filter((value) => {
        for(let key of keys){
            if(value[key]?.toLocaleLowerCase()?.includes(filterText.toLocaleLowerCase())){
                return true
            }
        }
    })
}

