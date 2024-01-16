
type MenuOptions = '' | 'all' | 'dogs' | 'cats' | 'fishes';

export const createMenuObject = (activeMenu: MenuOptions) => {

    console.log('activeMenu:', activeMenu);

    let returnObject = {
        all: false,
        dogs: false,
        cats: false,
        fishes: false,
    }

    if(activeMenu !== ""){
        returnObject[activeMenu] = true
    }

    returnObject;
}