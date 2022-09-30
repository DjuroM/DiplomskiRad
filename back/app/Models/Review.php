<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;


    public $table = 'review';

    protected $fillable = [
        'user_id', 'guitar_id', 'review'
    ];

    public function user()
    {
        return $this->belongsTo(UserModel::class, 'user_id');
    }
    public function guitar()
    {

        return $this->belongsTo(Guitar::class, 'guitar_id');
    }

    public $timestamps = false;
}
