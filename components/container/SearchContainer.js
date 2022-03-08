import React from 'react'
import InputSearch from '../inputs/InputSearch'
import ImgCityContainer from './ImgCityContainer'

const SearchContainer = () => {
    return (
            <div
                className='flex flex-col justify-center items-center h-5/6 sm:h-screen'
            >
                <InputSearch/>
                <div
                    className='
                    grid grid-cols-2 grid-rows-2 sm:grid-cols-4'
                >
                    <ImgCityContainer url='/img/london.jpg'title='London' id={2643743} />
                    <ImgCityContainer url='/img/paris.jpg'title='Paris' id={2968815} />
                    <ImgCityContainer url='/img/tokyo.jpg'title='Tokyo' id={1850147} />
                    <ImgCityContainer url='/img/new-york.jpg'title='New York'id={5128638} />
                </div>
            </div>
    )
}

export default SearchContainer