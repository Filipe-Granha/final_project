class Property < ActiveRecord::Base

  def sell
    profitable = "Keep for now!"
    profitable = "Sell!" if !rent || rent == 0
    return profitable
  end

end
