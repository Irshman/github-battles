import { makeBattle } from "../../components/api";
import { getBattleFailure, getBattleLoading, getBattleSuccess } from "./battle.actions"

export const getBattle = (players) => async (dispatch) => {
  await dispatch(getBattleLoading());

  try {
    const data = await makeBattle(players)
    if(data) {
      await dispatch(getBattleSuccess(data))
    }
  } catch (error) {
    await dispatch(getBattleFailure(error))
  }
}