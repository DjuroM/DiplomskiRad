<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    public $table = 'order';

    protected $fillable = [
        'user_id', 'guitar_id', 'order_date', 'country_id', 'price'
    ];

    public function user()
    {
        return $this->belongsTo(UserModel::class, 'user_id');
    }
    public function guitar()
    {

        return $this->belongsTo(Guitar::class, 'guitar_id');
    }

    public function country()
    {
        return $this->belongsTo(Country::class, 'country_id');
    }

    public $timestamps = false;
}
