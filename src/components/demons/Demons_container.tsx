import {Demons} from "./Demons";
import {rootReducerType} from "../../store/Store-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {connect} from "react-redux";
import {useEffect} from "react";
import {changeDemonTC, deleteDemonAC, deleteDemonTC, getDemonsTC} from "../../reducers/Demons-reducer";
import {demonType} from "../../types/Demons_reducer_types";
import {useLocation} from "react-router-dom";


export type demonsType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    demons: Array<demonType>
}
export type mapDispatchToPropsType = {
    getDemonsTC: (limit: number, page: number) => void
    deleteDemonAC: (demonId: string) => void
    deleteDemonTC: (demonId: string) => void
    changeDemonTC: (demonId: string, age: string, birthday: string , growth: string, weight: string, status: string) => void
}
const mapStateToProps = (state: rootReducerType): mapStateToPropsType => {
    return {
        demons: state.demonsReducer.demons,
    }
}

export const DemonsContainer = ({demons , getDemonsTC, deleteDemonAC, deleteDemonTC, changeDemonTC}: demonsType) => {
    let page = +useLocation().pathname.slice(-1)
    useEffect(() => {
        getDemonsTC(5, page)
    }, [page])

    return (
        <Demons demons={demons}
                deleteDemon={deleteDemonAC}
                deleteDemonGlobal={deleteDemonTC}
                changeDemon={changeDemonTC}
        />
    )
}

const WithRedirectDemonsContainer = withAuthRedirect(DemonsContainer)

export const ConnectedDemonsContainer = connect(mapStateToProps, {getDemonsTC, deleteDemonAC, deleteDemonTC, changeDemonTC})(WithRedirectDemonsContainer)