<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Guitar extends Model
{
    use HasFactory;

    public $table = 'guitar';

    protected $fillable = [
        'model', 'guitar_type_id', 'pickups_id', 'price', 'release_year', 'image', 'description', 'brand_id'
    ];

    public function guitarType()
    {
        return $this->belongsTo(GuitarType::class, 'guitar_type_id');
    }
    public function brand()
    {
        return $this->belongsTo(Brand::class, 'brand_id');
    }
    public function pickups()
    {
        return $this->belongsTo(Pickups::class, 'pickups_id');
    }

    public $timestamps = false;
}
