<?php

namespace App\Http\Controllers;

use App\Models\Planet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class filterPlanetController extends Controller
{
    public function sort($method){
        if($method == 1){
            $planets = Planet::orderBy('planet_name', 'ASC')->get();
            if($planets){
                return response()->json(['status'=>200,'planets'=>$planets]);
            } 
        }else if($method == 2){
            $planets = Planet::orderBy('planet_name', 'DESC')->get();
            if($planets){
                return response()->json(['status'=>200,'planets'=>$planets]);
            } 
        }
    }

    public function show($name){
        $planets = DB::table('planets')->where('planet_name','LIKE',"%{$name}%")->orWhere('planet_radius','LIKE',"%{$name}%")->orWhere('planet_revolve_speed','LIKE',"%{$name}%")->orWhere('planet_distance_sun','LIKE',"%{$name}%")
        ->get();
           
        if($planets){
            return response()->json(['status'=>200,'planets'=>$planets]);
        } 
    }
}
