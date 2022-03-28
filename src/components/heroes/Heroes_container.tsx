import {Heroes} from "./Heroes";
import {rootReducerType} from "../../store/Store-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {connect} from "react-redux";
import {
    changeHeroTC,
    createNewHeroTC,
    deleteHeroAC,
    deleteHeroTC,
    getHeroesTC, searchHeroTK
} from "../../reducers/Heroes-reducer";
import {useEffect} from "react";
import {useLocation} from "react-router-dom"
import {heroType} from "../../types/Heroes_reducer_types";


export type heroesType = mapStateToPropsType & mapDispatchToPropsType
export type mapStateToPropsType = {
    heroes: Array<heroType>
}
export type mapDispatchToPropsType = {
    getHeroesTC: (limit: number, page: number) => void
    deleteHeroAC: (heroId: string) => void
    createNewHeroTC: (name: any, id: any, img: any) => void
    deleteHeroTC: (heroId: string) => void
    changeHeroTC: (heroId: string, age: string, birthday: string, growth: string, weight: string, status: string) => void
    searchHeroTK: (name: string) => void

}
const mapStateToProps = (state: rootReducerType): mapStateToPropsType => {
    return {
        heroes: state.heroesReducer.heroes,
    }
}

const HeroesContainer = ({
                             heroes,
                             getHeroesTC,
                             deleteHeroAC,
                             createNewHeroTC,
                             deleteHeroTC,
                             changeHeroTC,
                             searchHeroTK,

                         }: heroesType) => {
    let page = +useLocation().pathname.slice(-1)
    useEffect(() => {

        getHeroesTC(5, page)
    }, [page])

    return (
        <Heroes heroes={heroes}
                deleteHero={deleteHeroAC}
                createHero={createNewHeroTC}
                deleteHeroGlobal={deleteHeroTC}
                changeHero={changeHeroTC}
                searchHero={searchHeroTK}
        />
    )
}

const WithRedirectHeroesContainer = withAuthRedirect(HeroesContainer)



export const ConnectedHeroesContainer = connect(mapStateToProps, {
    getHeroesTC,
    searchHeroTK,
    deleteHeroAC,
    createNewHeroTC,
    deleteHeroTC,
    changeHeroTC,
})(WithRedirectHeroesContainer)