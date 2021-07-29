import React from 'react'
import useLocalStorage from 'react-use-localstorage'
import {
  StyledCardHeroes,
  StyledCardHeroesImage,
  StyledBoard,
  StyledHeroName,
  StyledCardText,
  StyledHeart
} from '../listHeroes/styled'
interface IDataOfHeroes {
  name:string;
  url:string;
}


export const ListHeroesFavorite: React.FC = () => {
  const [favoriteHeroes, setFavoriteHeroes] = useLocalStorage('favoriteHeroes', JSON.stringify([]))
  const removeFavoriteHeroes = (index: number) => (event: React.MouseEvent) => {
    const favoriteHeroesCopy = JSON.parse(favoriteHeroes)
    favoriteHeroesCopy.splice(index, 1)
    setFavoriteHeroes(JSON.stringify(favoriteHeroesCopy))
  }
  return (
    <StyledBoard>
      {JSON.parse(favoriteHeroes).map((hero:IDataOfHeroes, index: number) => {
        return (
          <StyledCardHeroes key={index}>
            <StyledHeart isFavoriteHero = {true} onClick={removeFavoriteHeroes(index)}> ♥ </StyledHeart>
            <StyledCardHeroesImage
              key={index}
              src={`https://starwars-visualguide.com/assets/img/characters/${hero.url.replace(/[^+\d]/g, '')}.jpg`}
            />
            <StyledCardText>
              <StyledHeroName>{hero.name}</StyledHeroName>
            </StyledCardText>
          </StyledCardHeroes>
        )
      })}
    </StyledBoard>
  )
}
