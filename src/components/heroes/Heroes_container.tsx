import {Heroes} from "./Heroes";
import {rootReducerType} from "../../store/Store-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {connect} from "react-redux";
import {changeAgeAC, createNewHeroTC, deleteHeroAC, getHeroesTC, heroType} from "../../reducers/Heroes-reducer";
import {useEffect} from "react";


export type heroesType = mapStateToPropsType & mapDispatchToPropsType
export type mapStateToPropsType = {
    heroes: Array<heroType>
}
export type mapDispatchToPropsType = {
    getHeroesTC: () => void
    deleteHeroAC: (heroId: number) => void
    changeAgeAC: (heroId: number, age: number | string) => void
    createNewHeroTC: (name: any, id: any, img: any)  => void
}
const mapStateToProps = (state: rootReducerType): mapStateToPropsType => {
    return {
        heroes: state.heroesReducer.heroes,
    }
}

export const HeroesContainer = ({heroes, getHeroesTC, deleteHeroAC, changeAgeAC, createNewHeroTC}: heroesType) => {
    useEffect(() => {
        getHeroesTC()
    }, [])

    return (
        <Heroes heroes={heroes}
               deleteHero={deleteHeroAC}
                changeAge={changeAgeAC}
                createHero={createNewHeroTC}
        />
    )
}

const WithRedirectHeroesContainer = withAuthRedirect(HeroesContainer)

export const ConnectedHeroesContainer = connect(mapStateToProps, {getHeroesTC, deleteHeroAC, changeAgeAC, createNewHeroTC})(WithRedirectHeroesContainer)