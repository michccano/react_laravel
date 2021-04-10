<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Planet extends Model
{
    use HasFactory;
    protected $table = 'planets';
    protected $fillable = ['planet_name','planet_radius','planet_revolve_speed','planet_distance_sun'];
}
