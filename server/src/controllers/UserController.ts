import { Get, JsonController } from "routing-controllers";
import { InjectRepository } from "typeorm-typedi-extensions";
import { UserRepository } from "../repositories/UserRepository";
import { Service } from "typedi";

@Service()
@JsonController("/users")
export class UserController {

    constructor(@InjectRepository() private userRepository: UserRepository){}

    @Get()
    public getUsers(){
        return this.userRepository.count();
    }

}