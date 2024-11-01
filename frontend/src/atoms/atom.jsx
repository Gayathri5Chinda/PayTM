import { atom } from 'recoil';


export const firstState = atom({
    key: 'firstState', 
    default: {},
})


export const midState = atom({
    key: 'midState', 
    default: {},
});

export const lastState = atom({
    key: 'lastState', 
    default: {}, 
});
  
export const userState = atom({
    key: 'userState', 
    default: {}, 
});

export const passwordState = atom({
    key: 'passwordState', 
    default: {}, 
});

export const amountState = atom({
    key: 'amountState', 
    default: 0, 
});
