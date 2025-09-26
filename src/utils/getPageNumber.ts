export const getPageNumber = ( pathname : string ): string => {
    const pathnameSplit = pathname.split("/");
    return pathnameSplit[2];
}