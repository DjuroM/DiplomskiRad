<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserModel extends Model
{
    use HasFactory;

    public $table = 'user';

    protected $fillable = [
        'name', 'surname', 'password', 'username', 'email', 
    ];

  
    public $timestamps = false;
}
