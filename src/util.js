export const findByTestAtrr=(component,attr)=>{
    const wrapper=component.find(attr);
    return wrapper;


}