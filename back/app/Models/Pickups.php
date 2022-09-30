<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pickups extends Model
{
    use HasFactory;


    public $table = 'pickups';

    protected $fillable = [
        'pickup_combination', 'pickup_description'
    ];

    public $timestamps = false;
}
