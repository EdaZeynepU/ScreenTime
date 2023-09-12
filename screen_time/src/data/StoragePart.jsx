

export function addToFavs(ScreenData,id) {
    const favScreens=getItems();
    favScreens[id] = ScreenData;
    localStorage.setItem('favScreen', JSON.stringify(favScreens));
}

export function deleteFromFavs(ScreenId) {
    const favScreens = getItems();
    delete favScreens[ScreenId];
    localStorage.setItem('favScreen', JSON.stringify(favScreens));
}

export function getItems() {
    try {
        const favScreenData = JSON.parse(localStorage.getItem('favScreen'));
      
        if (favScreenData && typeof favScreenData === 'object') {
          return favScreenData;
        } else {
          localStorage.setItem('favScreen', JSON.stringify({}));
          return {};
        }
      } catch (error) {
        console.error('Error parsing favScreen data:', error);
      }
}