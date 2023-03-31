const staticResults_Card = `      
  <style>
  #results_card table thead tr {
    border: 0;
  }

  /* set column width */
  #results_card table thead tr td {
    width: 50%;
    border: 0;
  }

  /* bolded headers and data results */
  #results_card table tbody tr:first-child td {
    font-weight: bold;
    border-bottom: solid black 1px;
  }

  #results_card table tbody tr:not(:first-child) td:last-child {
    font-weight: bold;
    /*border-top: solid black 1px;*/
    border-bottom: solid black 1px;
    border-left: solid black 1px;
  }




  /* borders around mini-tables */
  #results_card table tbody tr:first-child {
    border-top: solid 2px;
  }

  #results_card table tbody tr:last-child {
    border-bottom: solid 2px;
  }

  #results_card table tbody tr td:first-child {
    border-left: solid 2px;
  }

  #results_card table tbody tr td:last-child {
    border-right: solid 2px;
  }
</style>

  
  
  
  <div id="results_card" class="card">
  <div class="card-body">
      <h5 class="card-title">Results:</h5>
  
      <div class="card">
          <div id="results-header" class="card-body">
              <span id="result-pagination"></span>
              <div class="btn-toolbar mb-3 justify-content-center" role="toolbar"
                  aria-label="Toolbar with button groups">
                  <div class="btn-group me-2 mb-2" role="group" aria-label="download group">
                      <a id="CSVdownload" style="display:none;" type="button" href=" " download=" " class="btn btn-primary"
                          title="Export a CSV file of all points"><i class="fa fa-download"></i> CSV</button>
  
                      <a id="JSONdownload" style="display:none;" href=" " download=" " class="btn btn-primary"
                          title="Export a JSON file of all points"><i class="fa fa-download"></i> JSON</a>
  
                      <a id="KMLdownload" style="display:none;" type="button" href=" " download=" " class="btn btn-primary"
                          title="Export a KML file of all points"><i class="fa fa-download"></i> KML</a>
                  </div>
                  <div class="btn-group mb-2" role="group" aria-label="download group">
                      <button type="button" class="btn btn-info" data-bs-toggle="modal"
                          data-bs-target="#resultsHelpModal" title="Results Help"><i class="fa fa-question"
                              aria-hidden="true"></i> Help</button>
                  </div>
              </div>
          </div>
      </div>
  
  
      <div class="card">
          <div class="card-body">
              <!-- Bordered Table -->
              <table class="table table-sm">
                  <thead>
                      <tr>
                          <td ></td>
                          <td ></td>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td >Route Information</td>
                          <td >
                              <button type="button" class="btn btn-info copy" onclick="copyRouteDFO()" title="copy"><i
                                      class="fa fa-copy" aria-hidden="true"></i></button>
                              <button type="button" class="btn btn-info"
                                  onclick="makequeryTxDOT_Roadways_Unsegmented()"><i class="fa fa-link"
                                      aria-hidden="true"></i></button>
                          </td>
                      </tr>
                      <tr>
                          <td >RouteID:</td>
                          <td id="p_returned_ROUTEID" class="textout table-secondary"></td>
                      </tr>
                      <tr>
                          <td >Route:</td>
                          <td id="p_returned_RTE_DEFN_LN_NM" class="textout table-secondary"></td>
                      </tr>
                      <tr>
                          <td >Roadbed Type:</td>
                          <td id="p_returned_RDBD_TYPE_DSCR" class="textout table-secondary"></td>
                      </tr>
                      <tr>
                          <td >DFO:</td>
                          <td id="p_returned_RTE_DFO" class="textout table-secondary"></td>
                      </tr>
                  </tbody>
              </table>
  
              <table class="table table-sm">
                  <thead>
                      <tr>
                          <td ></td>
                          <td ></td>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td >Control Section</td>
                          <td ><button type="button" class="btn btn-info copy" onclick="copyControlSection()"
                                  title="copy"><i class="fa fa-copy" aria-hidden="true"></i></button></td>
                      </tr>
                      <tr>
                          <td >Control Section:</td>
                          <td id="p_returned_CTRL_SECT_LN_NBR" class="textout table-secondary"></td>
                      </tr>
                      <tr>
                          <td >Mile Point:</td>
                          <td id="p_returned_CTRL_SECT_MPT" class="textout table-secondary"></td>
                      </tr>
                  </tbody>
              </table>
  
              <table class="table table-sm">
                  <thead>
                      <tr>
                          <td ></td>
                          <td ></td>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td >Field Location</td>
                          <td ><button type="button" class="btn btn-info copy" onclick="copyFieldLocation()"
                                  title="copy"><i class="fa fa-copy" aria-hidden="true"></i></button></td>
                      </tr>
                      <tr>
                          <td >Reference Marker:</td>
                          <td id="p_returned_RMRKR_PNT_NBR" class="textout table-secondary"></td>
                      </tr>
                      <tr>
                          <td >Displacement:</td>
                          <td id="p_returned_RMRKR_DISPLACEMENT" class="textout table-secondary"></td>
                      </tr>
                  </tbody>
              </table>
  
  
              <table class="table table-sm">
                  <thead>
                      <tr>
                          <td ></td>
                          <td ></td>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td >Coordinates</td>
                          <td ><button type="button" class="btn btn-info copy" onclick="copyCoordinates()"
                                  title="copy"><i class="fa fa-copy" aria-hidden="true"></i></button></td>
                      </tr>
                      <tr>
                          <td >Latitude:</td>
                          <td id="p_returned_LAT" class="textout table-secondary"></td>
                      </tr>
                      <tr>
                          <td >Longitude:</td>
                          <td id="p_returned_LON" class="textout table-secondary"></td>
                      </tr>
                  </tbody>
              </table>
              <!-- End Bordered Table -->
  
          </div>
      </div>
  
  </div>
  </div>`
