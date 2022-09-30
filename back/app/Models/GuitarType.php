<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GuitarType extends Model
{
    use HasFactory;

    public $table = 'guitar_type';

    protected $fillable = [
        'type'
    ];

    public $timestamps = false;
}
