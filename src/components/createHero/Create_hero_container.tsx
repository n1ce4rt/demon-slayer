import {CreateHero} from "./Create_hero";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {connect} from "react-redux";
import {createNewHeroTC} from "../../reducers/Heroes-reducer";


export type mapDispatchToPropsType = {
    createNewHeroTC: (heroId: string, name: string, race: string, gender: string, age: number, birthday: string, growth: number, weight: number, utensils: string, style: string, status: string, img: string) => void
}
const CreateHeroContainer =({createNewHeroTC}: mapDispatchToPropsType) => {


    return (
        <CreateHero
         createNewHero={createNewHeroTC}
        />
    )
}

const WithRedirectCreateHeroContainer = withAuthRedirect(CreateHeroContainer)

export const ConnectedCreateHero = connect(undefined, {createNewHeroTC})(WithRedirectCreateHeroContainer)