import React, { useEffect, useState, useCallback } from 'react'
import {
  StyledCardHeroes,
  StyledCardHeroesImage,
  StyledBoard,
  StyledHeart,
  StyledHeroName,
  StyledCardText,
  StyledPaginationSearch,
  StyledSearchHeroInput,
  StyledPrevButton,
  StyledNextButton,
  StyledPagination,
} from './styled'
import api from '../../api'
import useLocalStorage from 'react-use-localstorage'
import { LoadingIndicator } from '../LoadingIndicator';
import {Pagination} from '../Pagination'

const heroesPerPage = 10

interface IDataOfHeroes {
  name:string;
  url:string;
}

export const ListHeroes: React.FC = () => {

  const [favoriteHeroes, setFavoriteHeroes] = useLocalStorage('favoriteHeroes', JSON.stringify([]))
  const [pageNumber, setPageNumber] = useState(1)
  const [heroesCount, setHeroesCount] = useState<number>(0)
  const [heroes, setHeroes] = useState<IDataOfHeroes[]>([]) //
  const [searchStr, setSearchStr] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  
  const callbackGetInitHeroes = useCallback(async() => {
    setIsLoading(true)
    if (!searchStr){
      const { data } = await api.get(`?page=${pageNumber}`)//error handler
      setHeroes(data.results)
      setHeroesCount(data.count)
      setIsLoading(false)
      return data;
    }
      const { data } = await api.get(`?search=${searchStr}`)
      setHeroes(data.results)
      setHeroesCount(data.count)
      setIsLoading(false)
      return data;

  }, [pageNumber,searchStr])
  useEffect(() => {
      callbackGetInitHeroes()
  }, [pageNumber,searchStr,callbackGetInitHeroes])
  const addFavorireHeroes = (name: string, index: number) => (event: React.MouseEvent) => {
    const favoriteHeroesCopy = JSON.parse(favoriteHeroes)
    const heroIndex = favoriteHeroesCopy.findIndex((hero:IDataOfHeroes) => hero.name === name)
    if (heroIndex !== -1) {
      favoriteHeroesCopy.splice(heroIndex, 1)
    } else {

      favoriteHeroesCopy.push({ ...heroes[index] })
    }
    setFavoriteHeroes(JSON.stringify(favoriteHeroesCopy))
  }
  const isFavoriteHero = (hero:IDataOfHeroes) => {
    return (JSON.parse(favoriteHeroes).some( (heroes:IDataOfHeroes) => {return heroes.name === hero.name}))
  }
  
  const paginate = (numberOfPage:number) => setPageNumber(numberOfPage)

  return (
    <React.Fragment>
      <StyledPaginationSearch>
        <StyledSearchHeroInput
          type="text"
          placeholder="Search in the heroes"
          onChange={(e) => setSearchStr(e.target.value)}
        />
        {searchStr===''?(
          <StyledPagination>
            <StyledPrevButton
              onClick={() => setPageNumber(old => Math.max(old - 1, 1))}
              disabled={pageNumber === 1}
            >
              &#171;
            </StyledPrevButton>
            <Pagination selectedPage={pageNumber} heroesPerPage = {heroesPerPage} heroesCount = {heroesCount} paginate={paginate}/>
            <StyledNextButton
            onClick={() => {setPageNumber(old => ( old + 1 ))}}
            disabled={pageNumber === Math.ceil(heroesCount/heroesPerPage)}
            >
              &#187;
            </StyledNextButton>
          </StyledPagination>
          ):(
            <React.Fragment/>
          )}
        </StyledPaginationSearch>
      <StyledBoard>
      {!isLoading?(
        heroes.map((hero:IDataOfHeroes, index:number) => {
          return (
            <StyledCardHeroes key={index}>
              <StyledHeart
                isFavoriteHero = {isFavoriteHero(hero)}
                onClick={addFavorireHeroes(hero.name, index)}
              > ♥ </StyledHeart>
              <StyledCardHeroesImage
                key={index}
                src={`https://starwars-visualguide.com/assets/img/characters/${hero.url.replace(/[^+\d]/g, '')}.jpg`}
              />
              <StyledCardText>
                <StyledHeroName>{hero.name}</StyledHeroName>
              </StyledCardText>
            </StyledCardHeroes>
          )
        })
      ):(
        <LoadingIndicator/>
      )}
      </StyledBoard>
    </React.Fragment>
  )
}
