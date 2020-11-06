enum Gender {
    MALE,
    FEMALE,
    ATTACK_HELI
}

export default interface Pet {
    id: number;
    name: string;
    chipId: string;
    race: string;
    color: string; // maybe give hex selector
    gender: Gender;
    pictureUrl: string;
    lostDate: Date;
    locationLiving: string;
    locationLastSeen: string;
    notes: string;
}
