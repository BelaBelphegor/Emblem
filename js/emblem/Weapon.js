const EWeapon_type = 
{
    SWORD: 0,
    DAGGER: 1,
}

class Weapon
{
    constructor(min_damage = 1, max_damage = 2, attack_speed = 1, weapon_type = EWeapon_type.SWORD)
    {
        this.min_damage = min_damage;
        this.max_damage = max_damage;
        this.attack_speed = attack_speed;
        this.weapon_type = weapon_type;
        this.last_attack = 0;
    }
}