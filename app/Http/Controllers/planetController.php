<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Planet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class planetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $planets = Planet::all();
        if($planets){
            return response()->json(['status'=>200,'planets'=>$planets]);
        }   
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $result = DB::table('planets')->insert([
            'planet_name' => $request->pName,
            'planet_radius' => $request->pRadius,
            'planet_revolve_speed' => $request->pSpeed,
            'planet_distance_sun' => $request->pDistance,
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
        ]);
        if ($result) {
            return response()->json(['status' => 200]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
        $planet = Planet::find($id);
        if($planet){
            return response()->json(['status'=> 200, 'planet'=>$planet]);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $result = DB::table('planets')
              ->where('id', $id)
              ->update([
                'planet_name' => $request->pName,
                'planet_radius' => $request->pRadius,
                'planet_revolve_speed' => $request->pSpeed,
                'planet_distance_sun' => $request->pDistance,
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
            ]); 
        
        if($result){
            return response()->json(['status'=>200]);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $planet = Planet::find($id);
        if($planet->delete()){
            return response()->json(['status'=>200]);
        }
    }
}
