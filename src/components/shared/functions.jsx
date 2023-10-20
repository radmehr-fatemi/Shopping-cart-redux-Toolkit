export const shortHandler = ( text ,digit ) => {
    const splited = text.split("")
    const newText = splited.slice( 0 ,digit )
    return newText
}