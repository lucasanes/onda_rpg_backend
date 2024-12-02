import { CharacterModel } from '@src/domain/model/character.model';
import { InviteModel } from '@src/domain/model/invite.model';
import { SessionModel } from '@src/domain/model/session.model';
import { Usecase } from '../usecase';

export type GetDashboardUsecaseInput = {
  userId: number;
};

export type GetDashboardUsecaseOutput = {
  sessions: SessionModel[];
  characters: CharacterModel[];
  invites: InviteModel[];
};

export abstract class GetDashboardUsecase extends Usecase<
  GetDashboardUsecaseInput,
  GetDashboardUsecaseOutput
> {
  abstract execute(
    input: GetDashboardUsecaseInput,
  ): Promise<GetDashboardUsecaseOutput>;
}
