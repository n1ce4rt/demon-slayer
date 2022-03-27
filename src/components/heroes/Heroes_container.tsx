import {Heroes} from "./Heroes";
import {rootReducerType} from "../../store/Store-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {connect} from "react-redux";
import {
    changeAgeAC, changeHeroTC, changeBirthdayAC, changeGrowthAC, changeStatusAC, changeWeightAC,
    createNewHeroTC,
    deleteHeroAC,
    deleteHeroTC,
    getHeroesTC,
    heroType, searchHeroTK
} from "../../reducers/Heroes-reducer";
import {useEffect} from "react";


export type heroesType = mapStateToPropsType & mapDispatchToPropsType
export type mapStateToPropsType = {
    heroes: Array<heroType>
    page: number
}
export type mapDispatchToPropsType = {
    getHeroesTC: (limit: number, page: number) => void
    deleteHeroAC: (heroId: string) => void
    changeAgeAC: (heroId: string, age: number | string) => void
    createNewHeroTC: (name: any, id: any, img: any) => void
    deleteHeroTC: (heroId: string) => void
    changeHeroTC: (heroId: string, age: string, birthday: string, growth: string, weight: string, status: string) => void
    searchHeroTK: (name: string) => void
    changeBirthdayAC: (heroId: string, birthday: string) => void
    changeGrowthAC: (heroId: string, growth: string) => void
    changeWeightAC: (heroId: string, weight: string) => void
    changeStatusAC: (heroId: string, status: string) => void
}
const mapStateToProps = (state: rootReducerType): mapStateToPropsType => {
    return {
        heroes: state.heroesReducer.heroes,
        page: state.heroesReducer.currentPage
    }
}

const HeroesContainer = ({
                             heroes,
                             page,
                             getHeroesTC,
                             deleteHeroAC,
                             changeAgeAC,
                             createNewHeroTC,
                             deleteHeroTC,
                             changeHeroTC,
                             searchHeroTK,
                             changeBirthdayAC,
                             changeGrowthAC,
                             changeWeightAC,
                             changeStatusAC
                         }: heroesType) => {
    useEffect(() => {
        getHeroesTC(5, page)
        console.log(page)
    }, [])

    return (
        <Heroes heroes={heroes}
                deleteHero={deleteHeroAC}
                changeAge={changeAgeAC}
                createHero={createNewHeroTC}
                deleteHeroGlobal={deleteHeroTC}
                changeHero={changeHeroTC}
                searchHero={searchHeroTK}
                changeBirthday={changeBirthdayAC}
                changeGrowth={changeGrowthAC}
                changeWeight={changeWeightAC}
                changeStatus={changeStatusAC}

        />
    )
}

const WithRedirectHeroesContainer = withAuthRedirect(HeroesContainer)

export const ConnectedHeroesContainer = connect(mapStateToProps, {
    getHeroesTC,
    searchHeroTK,
    changeStatusAC,
    changeGrowthAC,
    deleteHeroAC,
    changeWeightAC,
    changeAgeAC,
    createNewHeroTC,
    deleteHeroTC,
    changeHeroTC,
    changeBirthdayAC
})(WithRedirectHeroesContainer)