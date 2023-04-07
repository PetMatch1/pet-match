export class Location {
    Coordinates: number[] = [];
    Type: string = "";
}
export class Listing {
    Age: number = 0;
    Gender: string = "";
    Breed: string = "";
    Location?: Location = new Location();
    Name: string = "";
    Photo: string[] = [];
    Price: number = 0;
    TraitList?: string[] = [];
    UserID?: string = "";
    id?: string = "";
    isActive?: boolean = false;
    isBid?: boolean = false;
    isTimed?: boolean = false;
    startDate?: Date = new Date();

}